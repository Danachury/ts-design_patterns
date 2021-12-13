import Observer from 'src/observer/observer'

export default interface Observable {
  attach: (o: Observer) => void
  detach: (o: Observer) => void
  notify: () => void
}
