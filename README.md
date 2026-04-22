# @init/photon-base-kit

Base installable kit for the package-first photon.

## Назначение

@init/photon-base-kit — npm/TypeScript package; Photon integration or runtime layer. Пакет экспортирует TypeScript/React primitives для frontend-части Init/Rx и не должен смешивать backend-интеграции с клиентским runtime.

- Этот пакет находится в слое Photon. Доменная логика должна оставаться в базовых пакетах, а здесь должны быть только адаптеры, настройки страниц, runtime-провайдеры или UI-kit для конструктора.

## Установка

~~~bash
npm install @init/photon-base-kit
~~~

Проверьте peer dependencies в host-приложении, особенно версии React, Next.js и соседних <code>@init/*</code> пакетов.

## Экспорты

- <code>.</code>
- <code>./themes</code>
- <code>./profile-presets</code>
- <code>./documents</code>

Основные entry points:
- <code>blocks/index.ts</code>
- <code>index.ts</code>
- <code>primitives/index.ts</code>
- <code>profile-presets/index.ts</code>
- <code>profile-presets/shared.ts</code>
- <code>themes/index.ts</code>
- <code>themes/shared.ts</code>

## Состав пакета

- **blocks**: <code>blocks/command-center-cta.tsx</code>, <code>blocks/feature-grid.tsx</code>, <code>blocks/hero-spotlight.tsx</code>, <code>blocks/index.ts</code>, <code>blocks/init-landing/hero-grid-canvas.tsx</code>, <code>blocks/init-landing/hero-lead-form.tsx</code>, <code>blocks/init-landing/hero-stat.tsx</code>, <code>blocks/init-landing/hero-supporting-text.tsx</code>, ...и еще 15
- **hooks**: <code>hooks/use-surface-breakpoints.ts</code>
- **primitives**: <code>primitives/index.ts</code>, <code>primitives/init-check-list-item.tsx</code>, <code>primitives/init-stat-widget.tsx</code>, <code>primitives/init-status-pill.tsx</code>, <code>primitives/init-testimonial-card.tsx</code>, <code>primitives/init-testimonial-profile.tsx</code>, <code>primitives/init-typed-text.tsx</code>, <code>primitives/rich-text.tsx</code>
- **profile-presets**: <code>profile-presets/index.ts</code>, <code>profile-presets/init-landing-content.ts</code>, <code>profile-presets/preset-scenarios.ts</code>, <code>profile-presets/scenarios/init-landing.ts</code>, <code>profile-presets/scenarios/paper-flow.ts</code>, <code>profile-presets/shared.ts</code>
- **Root**: <code>documents.ts</code>, <code>index.ts</code>, <code>module.tsx</code>
- **themes**: <code>themes/design-presets.ts</code>, <code>themes/index.ts</code>, <code>themes/shared.ts</code>, <code>themes/variant-themes.ts</code>, <code>themes/variants/air.ts</code>, <code>themes/variants/default.ts</code>

## Зависимости

Runtime dependencies:
- <code>@radix-ui/react-dropdown-menu ^2.1.16</code>
- <code>gsap ^3.14.2</code>
- <code>lucide-react ^0.556.0</code>
- <code>react-international-phone ^4.8.0</code>

Peer dependencies:
- <code>@init/photon ^0.1.0</code>
- <code>react ^19.0.0</code>
- <code>react-dom ^19.0.0</code>

## Сборка

- <code>build: tsup src/index.ts src/documents.ts src/themes/index.ts src/profile-presets/index.ts --format esm --dts --clean</code>
- <code>prepack: npm run build</code>

## Разработка

- держите типы публичного API рядом с основными entry points;
- не добавляйте host-specific код в базовые frontend SDK;
- Photon UI-kit и adapter packages должны оставаться над <code>@init/photon</code>, не наоборот;
- перед публикацией выполните <code>npm run build</code>, если пакет собирается в <code>dist</code>.
