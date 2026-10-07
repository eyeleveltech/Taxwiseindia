'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WHATSAPP_URL } from '@/lib/constants';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TRACK = ['YOU PAY', 'WE START', 'WE WORK', 'WE UPDATE', 'WE COMPLETE'];
/** Every scene layer starts on the same slight tilt; the pointer rig and parallax move it from there. */
const LAYER = 'absolute [transform:rotateY(-10deg)_rotateX(6deg)]';

/** Home hero: copy on the left, the floating status tracker on the right. */
export default function Hero() {
  const hero = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sec = hero.current!;
    const wrap = sec.querySelector<HTMLElement>('[data-scene-wrap]')!;
    const scene = sec.querySelector<HTMLElement>('[data-scene]')!;
    const rows = gsap.utils.toArray<HTMLElement>('[data-tk-row]');
    const segs = gsap.utils.toArray<HTMLElement>('[data-tk-seg]');
    const coin = sec.querySelector('[data-coin]');

    // The scene is laid out at 580×560 and scaled to fit its column.
    const fit = () => scene.style.setProperty('--s', (wrap.clientWidth / 580).toFixed(4));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    const setStep = (n: number) => {
      rows.forEach((r, i) => { r.toggleAttribute('data-done', i < n); r.toggleAttribute('data-active', i === n); });
      segs.forEach((s, i) => s.toggleAttribute('data-on', i < n));
      if (n >= rows.length) gsap.fromTo(coin, { scale: 1 }, { scale: 1.18, duration: 0.35, ease: 'power2.out', yoyo: true, repeat: 1 });
    };
    // reduced motion: the tracker rests on step three, nothing moves
    if (prefersReducedMotion()) { setStep(2); return () => ro.disconnect(); }
    setStep(0);

    const cleanups: Array<() => void> = [() => ro.disconnect()];

    const live = () => {
      gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el, i) =>
        gsap.to(el, { y: i % 2 ? 9 : -9, duration: 2.8 + (i % 3) * 0.5, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
      gsap.to('[data-ring-in]', { rotation: 360, duration: 48, ease: 'none', repeat: -1 });

      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const BASE = { rotationY: -10, rotationX: 6 };
        const rigs = gsap.utils.toArray<HTMLElement>('[data-depth]').map((el) => {
          const o = { duration: 0.9, ease: 'power3.out' };
          return {
            d: parseFloat(el.dataset.depth || '0.5'),
            rx: gsap.quickTo(el, 'rotationX', o), ry: gsap.quickTo(el, 'rotationY', o),
            x: gsap.quickTo(el, 'x', o), y: gsap.quickTo(el, 'y', o),
          };
        });
        const move = (e: PointerEvent) => {
          const mx = e.clientX / innerWidth - 0.5, my = e.clientY / innerHeight - 0.5;
          rigs.forEach((r) => { r.ry(BASE.rotationY + mx * 16); r.rx(BASE.rotationX - my * 12); r.x(mx * r.d * 44); r.y(my * r.d * 32); });
        };
        const leave = () => rigs.forEach((r) => { r.ry(BASE.rotationY); r.rx(BASE.rotationX); r.x(0); r.y(0); });
        sec.addEventListener('pointermove', move);
        sec.addEventListener('pointerleave', leave);
        cleanups.push(() => { sec.removeEventListener('pointermove', move); sec.removeEventListener('pointerleave', leave); });
      }

      let n = 2;
      const tick = () => {
        n = n >= rows.length ? 2 : n + 1;
        setStep(n);
        gsap.delayedCall(n >= rows.length ? 3.4 : 2.4, tick);
      };
      gsap.delayedCall(2.4, tick);
    };

    gsap.set('[data-intro]', { autoAlpha: 1 });
    gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.1 } })
      .from('[data-hero-eyebrow]', { y: 18, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from('h1', { y: 30, autoAlpha: 0 }, 0.18)
      .to('[data-hero-copy]', { '--hl': 1, duration: 1, ease: 'power3.inOut' }, 0.95)
      .from('[data-hero-sub]', { y: 24, autoAlpha: 0 }, 0.5)
      .from('[data-hero-ctas]', { y: 24, autoAlpha: 0 }, 0.62)
      .from('[data-disc], [data-ring], [data-sph]', { autoAlpha: 0, scale: 0.6, duration: 1.4, stagger: 0.06 }, 0.3)
      .from('[data-tracker]', { autoAlpha: 0, y: 110, rotationX: 40, rotationY: -34, duration: 1.4 }, 0.38)
      .from('[data-note]', { y: 80, rotationX: 30, duration: 1.3, stagger: 0.25 }, 0.9)
      .from('[data-note] .note', { autoAlpha: 0, scale: 0.7, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.25 }, 0.9)
      .from('[data-badge]', { autoAlpha: 0, scale: 0.3, rotation: -60, duration: 1, ease: 'back.out(1.8)' }, 1.45)
      .add(() => setStep(1), 1.3)
      .add(() => setStep(2), 1.75)
      .add(live);

    // Parallax as the hero scrolls away
    const out = { trigger: sec, start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('[data-hero-copy]', { yPercent: -10, ease: 'none', scrollTrigger: out });
    gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) =>
      gsap.to(el, { yPercent: -parseFloat(el.dataset.depth || '0.5') * 22, ease: 'none', scrollTrigger: out }));

    return () => cleanups.forEach((fn) => fn());
  }, { scope: hero });

  return (
    <section ref={hero} className="relative overflow-clip bg-off pb-[clamp(56px,7vw,96px)] pt-[clamp(124px,13vw,164px)]" aria-labelledby="hero-title">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(24px,4vw,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
        <div className="relative z-2 [--hl:0]" data-hero-copy>
          <p className="eyebrow max-sm:gap-2 max-sm:pl-[10px] max-sm:pr-3 max-sm:text-[10.5px] max-sm:tracking-[.1em] [&_.dot]:animate-[pulse_2.4s_var(--ease)_infinite]" data-intro data-hero-eyebrow>
            <i className="dot"></i>TAX &amp; BUSINESS COMPLIANCE, REIMAGINED
          </p>
          <h1 className="mt-6 font-display text-[clamp(34px,9.6vw,44px)] font-bold leading-[1.06] tracking-[-.035em] text-navy sm:text-[clamp(36px,4.1vw,58px)]" id="hero-title" data-intro>
            Tax &amp; Compliance,<br />
            <span className="bg-[linear-gradient(#63E6BE,#63E6BE)] bg-[position:0_90%] bg-[size:calc(var(--hl)*100%)_.26em] bg-no-repeat px-[.04em]">Without the Chase.</span>
          </h1>
          <p className="mt-[22px] max-w-[32em] text-[clamp(16px,1.2vw,18px)] leading-[1.65]" data-intro data-hero-sub>
            From GST and income tax to accounting and business compliance, TaxwiseIndia handles the work — and keeps you updated at every step.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro data-hero-ctas>
            <Link className="btn btn-primary btn-lg" href="/contact#contact-form">Get Started <svg className="i arr"><use href="#i-arrow" /></svg></Link>
            <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><svg className="i"><use href="#i-phone" /></svg>Talk to an Expert</a>
          </div>
        </div>

        <div className="relative ml-auto aspect-[580/560] w-full max-w-[580px] max-lg:mx-auto max-lg:mt-3 max-lg:max-w-[520px]" aria-hidden="true" data-intro data-scene-wrap>
          <div className="absolute left-0 top-0 h-[560px] w-[580px] origin-top-left scale-(--s) [--s:1] [perspective:1400px]" data-scene>
            <div className={`${LAYER} left-[118px] top-[62px] size-[420px] rounded-full bg-mint/40`} data-depth=".15" data-disc></div>
            <div className={`${LAYER} left-[62px] top-[14px] size-[532px]`} data-depth=".3" data-ring>
              <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-emerald/40" data-ring-in>
                <i className="absolute -left-[7px] top-1/2 -mt-[6.5px] size-[13px] rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]"></i>
              </div>
            </div>
            <div className={`${LAYER} left-[70px] top-[112px]`} data-depth="1.6" data-sph>
              <div className="size-6 rounded-full bg-emerald shadow-[inset_-3px_-4px_0_rgba(7,26,43,.16)]" data-float></div>
            </div>
            <div className={`${LAYER} left-[548px] top-[246px]`} data-depth=".7" data-sph>
              <div className="size-3.5 rounded-full bg-navy shadow-[inset_-2px_-2px_0_rgba(255,255,255,.18)]" data-float></div>
            </div>

            <div className={`${LAYER} left-[128px] top-[92px] w-[334px]`} data-depth=".55" data-tracker>
              <div data-float>
                <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_30px_60px_-30px_rgba(7,26,43,.3)]">
                  <div className="flex items-center justify-between gap-2.5">
                    <span className="flex items-center gap-[9px] font-display text-sm font-bold leading-none tracking-[-.01em] text-navy">
                      <span className="grid size-8 flex-none place-items-center rounded-[10px] border border-line bg-white shadow-[0_3px_0_#E4E9EF]">
                        <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-[21px]" />
                      </span>
                      TaxwiseIndia
                    </span>
                    <span className="rounded-full border border-mint-line bg-mint-soft px-2.5 py-[7px] font-display text-xs font-semibold leading-none text-emerald-ink">GST Services</span>
                  </div>
                  <div className="mb-3 mt-[18px] grid grid-cols-5 gap-[5px]">
                    {TRACK.map((label) => (
                      <i key={label} className="relative h-1.5 overflow-hidden rounded-full bg-line after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-emerald after:transition-[scale] after:duration-700 after:ease-out-expo data-on:after:scale-x-100" data-tk-seg></i>
                    ))}
                  </div>
                  <ol className="m-0 grid list-none gap-0.5 p-0">
                    {TRACK.map((label) => (
                      <li key={label} className="group flex h-11 items-center gap-3 rounded-xl px-2.5 font-display text-[12.5px] font-bold leading-none tracking-[.13em] text-[#97A5B3] transition-[background-color,color] duration-[.45s] data-active:bg-mint-soft data-active:text-navy data-done:text-navy" data-tk-row>
                        <span className="relative grid size-6 flex-none place-items-center rounded-full border-[1.5px] border-line-2 bg-white transition-[background-color,border-color] duration-[.45s] group-data-active:border-emerald group-data-active:before:size-2 group-data-active:before:rounded-full group-data-active:before:bg-emerald group-data-active:after:absolute group-data-active:after:-inset-[1.5px] group-data-active:after:animate-[ping_1.6s_var(--ease)_infinite] group-data-active:after:rounded-full group-data-active:after:border-2 group-data-active:after:border-emerald group-data-done:border-emerald group-data-done:bg-emerald">
                          <svg className="size-[13px] scale-[.3] fill-none stroke-navy stroke-[3.2] opacity-0 transition-[opacity,scale] duration-[.35s,.5s] ease-out-expo [stroke-linecap:round] [stroke-linejoin:round] group-data-active:hidden group-data-done:scale-100 group-data-done:opacity-100">
                            <use href="#i-check" />
                          </svg>
                        </span>
                        {label}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className={`${LAYER} left-[270px] top-2 w-[300px]`} data-depth=".95" data-note>
              <div data-float>
                <div className="note glass">
                  <span className="note-ic"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>
                  <div className="note-b"><b>TaxwiseIndia</b><p>Your GST filing has been initiated.</p></div>
                </div>
              </div>
            </div>

            <div className={`${LAYER} left-[14px] top-[410px] w-[300px]`} data-depth="1.2" data-note>
              <div data-float>
                <div className="note glass">
                  <span className="note-ic"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>
                  <div className="note-b"><b>TaxwiseIndia</b><p>Documents reviewed successfully.</p></div>
                </div>
              </div>
            </div>

            <div className={`${LAYER} left-[466px] top-[372px]`} data-depth="1.45" data-badge>
              <div data-float><span className="coin" data-coin><svg className="i"><use href="#i-check" /></svg></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
