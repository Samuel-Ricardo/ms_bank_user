export interface IDocumentation<S, D> {
  server(): S;
  setup(): D;
}
