import Observable from './observable'
import Observer from './observer'

class YoutubeChannel implements Observable {

  private _subscribers: Observer[] = []
  private _lastPostedVideo: string

  attach = (o: Observer): void => {
    this._subscribers.push(o)
  }

  detach = (o: Observer): void => {
    this._subscribers = this._subscribers.filter(observer => observer !== o)
  }

  notify = (): void =>
    this._subscribers.forEach(observer => observer.update())

  postVideo = (title: string) => {
    this._lastPostedVideo = title
    this.notify()
    console.log('New video posted to channel:', title)
  }

  get lastPostedVideo(): string {
    return this._lastPostedVideo
  }
}

class YoutubeChannelSubscriber implements Observer {

  private _observable: YoutubeChannel = null

  constructor(observable: YoutubeChannel) {
    this._observable = observable
  }

  update = () => {
    console.log('New Video posted:', this._observable.lastPostedVideo)
  }
}

const channel = new YoutubeChannel()
const s1 = new YoutubeChannelSubscriber(channel)
const s2 = new YoutubeChannelSubscriber(channel)

channel.attach(s1)
channel.attach(s2)
channel.postVideo('Video of observer pattern')
