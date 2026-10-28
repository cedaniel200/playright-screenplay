# Playwright + Cucumber + Screenplay — Demo Saucedemo

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.64.1-green)
![Cucumber](https://img.shields.io/badge/Cucumber-13.3.0-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-22%20%7C%2024%20%7C%2026-brightgreen)
![Screenplay](https://img.shields.io/badge/Screenplay-pattern-blue)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Proyecto de ejemplo para mostrar la forma más sencilla de implementar el patrón Screenplay dentro
de un proyecto de Playwright usando Cucumber como herramienta de BDD, con las características que
ya ofrece Playwright. La automatización es independiente de la aplicación: los escenarios Gherkin
describen el flujo y los pasos delegan en actores y tareas.

La variante con Cypress está en
[cypress-cucumber-screenplay](https://github.com/cedaniel200/cypress-cucumber-screenplay).

## Qué incluye

- **4 escenarios** en dos features: autenticación y compra.
- **Playwright 1.64** con Chromium headless; modo headed disponible.
- **Cucumber 13** con `tsx` para ejecutar TypeScript sin compilar.
- **Screenplay**: `Actor`, `Stage`, `Task` y páginas de UI con factories.
- **Informe HTML** generado por el formatter nativo de Cucumber.
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

Al terminar, Cucumber muestra el progreso en consola y genera el informe HTML.

## Informe

`npm test` deja el informe en:

```text
reports/cucumber-report.html
```

Incluye las features, escenarios y pasos con su estado y duración. La carpeta `reports/` está
ignorada por git: el informe se regenera en cada ejecución.

## Estructura

```text
features
├── authentication.feature        # login válido y usuario bloqueado
└── purchase.feature              # carrito y checkout

step-definitions
└── purchase.steps.ts             # pasos Gherkin

screenplay
├── actor.ts                      # actor y builder
├── on_stage.ts                   # actor en escena
├── performable.ts                # contrato de una acción
├── stage.ts                      # página de Playwright
├── task.ts                       # contrato de una tarea
└── cucumber/screenplay_world.ts  # contexto de Cucumber

saucedemo
├── model                         # User y Customer
├── task                          # login, carrito y checkout
└── ui                            # páginas y factories

test.setup.ts                     # hooks de Cucumber y navegador
cucumber.js                       # configuración de Cucumber
```

## Screenplay con Cucumber

| Concepto | Dónde vive | Ejemplo |
|---|---|---|
| Escenario | `features` | «Completar el checkout» |
| Paso | `step-definitions` | `Cesar completa el checkout con sus datos` |
| Actor | `screenplay/actor.ts` | `theActorNamed('Cesar')` |
| Tarea | `saucedemo/task` | `Authenticate.with(user)` |
| Página | `saucedemo/ui` | `InventoryPage.on(page)` |

Los pasos arman el actor y le piden que ejecute tareas. Las tareas usan las páginas de UI; el
feature no conoce selectores ni detalles de Playwright. Las páginas se crean con `Page.on(page)`
para que las tareas no construyan objetos directamente.

## Ten en cuenta

- **Saucedemo es un sitio público de práctica.** No hay datos reales ni credenciales privadas.
- **Los tests dependen de la red.** Si saucedemo no responde, fallan por el sitio, no por el código.
- **El repositorio conserva el typo histórico `playright` en el nombre.** El framework es
  Playwright.
- **Cucumber 13 requiere Node 22 o superior.**

## Licencia

[MIT](LICENSE) © Cesar Daniel
