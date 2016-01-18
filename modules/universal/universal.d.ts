export function provide(token: any, config: any): any;
export class NodeXhr {
  build(): any;
}
export class NodeBackend {
  createConnection(request: any): any;
}
export function ng2engineWithPreboot(): any;
export function ng2engine(): any;
export function bootstrap(component: any, providers?: any): any;
export function renderToString(AppComponent: any, serverProviders?: any): Promise<string>;
export function renderToStringWithPreboot(AppComponent: any, serverProviders?: any, prebootConfig?: any): Promise<string>;
export function appRefSyncRender(appRef: any): string;
export function serializeApplication(element: any, styles: string[], cache?: any): string;
export function selectorResolver(componentType: any): string;
export function stringifyElement(el: any): string;
export var SERVER_LOCATION_PROVIDERS: [any];
export var BASE_URL: string;
export var HTTP_PROVIDERS: [any];

export default {
  NodeXhr,
  NodeBackend,
  ng2engineWithPreboot,
  ng2engine,
  bootstrap,
  renderToString,
  renderToStringWithPreboot,
  appRefSyncRender,
  serializeApplication,
  selectorResolver,
  stringifyElement,
  SERVER_LOCATION_PROVIDERS,
  BASE_URL,
  HTTP_PROVIDERS
}
