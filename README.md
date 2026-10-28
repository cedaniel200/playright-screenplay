# Playwright + Cucumber + Screenplay — Demo Saucedemo

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.64.1-green)
![Cucumber](https://img.shields.io/badge/Cucumber-13.3.0-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-22%20%7C%2024%20%7C%2026-brightgreen)
![Screenplay](https://img.shields.io/badge/Screenplay-pattern-blue)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Login y compra completa contra [saucedemo.com](https://www.saucedemo.com) con Playwright,
Cucumber y el patrón Screenplay. Los escenarios se escriben en Gherkin y los pasos delegan en
actores y tareas.

## Qué incluye

- **2 escenarios** en un feature: compra completa y usuario bloqueado.
- **Playwright 1.64** con Chromium headless; modo headed disponible.
- **Cucumber 13** con `tsx` para ejecutar TypeScript sin compilar.
- **Screenplay**: `Actor`, `Stage`, `Task` y páginas de UI separadas.
- **Sin credenciales locales**: saucedemo publica sus usuarios de demo.
- **GitHub Actions** para ejecutar la suite en cada push y pull request.

## Requisitos

- **Node.js 22, 24 o 26** (los que soporta Cucumber 13).
- **npm**.
- **Chromium de Playwright**:

```sh
npx playwright install chromium
```

## Cómo se ejecuta

```sh
npm ci
npx playwright install chromium
npm test
```

Para ver el navegador:

```sh
npm run test:headed
```

Cucumber muestra el progreso y el resumen en consola. No hay reporte HTML adicional.

## Estructura

```text
features/
└── purchase.feature              # compra y usuario bloqueado

step-definitions/
└── purchase.steps.ts             # pasos Gherkin

screenplay/
├── actor.ts                      # actor y builder
├── on_stage.ts                   # actor en escena
├── performable.ts                # contrato de una acción
├── stage.ts                      # página de Playwright
├── task.ts                       # contrato de una tarea
└── cucumber/screenplay_world.ts  # contexto de Cucumber

saucedemo/
├── model                         # User y Customer
├── task                          # login, carrito y checkout
└── ui                            # selectores por pantalla

test.setup.ts                     # hooks de Cucumber y navegador
cucumber.js                       # configuración de Cucumber
```

## Screenplay con Cucumber

| Concepto | Dónde vive | Ejemplo |
|---|---|---|
| Escenario | `features` | «Compra de un producto» |
| Paso | `step-definitions` | `Cesar agrega una mochila al carrito` |
| Actor | `screenplay/actor.ts` | `theActorNamed('Cesar')` |
| Tarea | `saucedemo/task` | `Authenticate.with(user)` |
| UI | `saucedemo/ui` | `LoginPage`, `InventoryPage` |

El paso arma el actor y le pide que ejecute tareas. Las tareas usan las páginas de UI; el feature
no conoce selectores ni detalles de Playwright.

## Ten en cuenta

- **Saucedemo es un sitio público de práctica.** No hay datos reales ni credenciales privadas.
- **Los tests dependen de la red.** Si saucedemo no responde, fallan por el sitio, no por el código.
- **El repositorio conserva el typo histórico `playright` en el nombre.** El framework es
  Playwright.
- **Cucumber 13 requiere Node 22 o superior.**

## Licencia

[MIT](LICENSE) © Cesar Daniel
