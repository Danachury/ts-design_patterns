import { BlackHeader, Header, WhiteHeader } from './header'
import { BlackBody, Body, WhiteBody } from './body'

export interface Dashboard {
  createHeader(): void

  createBody(): void
}

export class DefaultDashboard implements Dashboard {

  protected constructor(private _header: Header,
                        private _body: Body) {}

  createHeader(): void {
    this._header.draw()
  }

  createBody(): void {
    this._body.draw()
  }

  static create(header: Header, body: Body): Dashboard {
    return new DefaultDashboard(header, body)
  }
}

export class WhiteDashboard extends DefaultDashboard {

  private static _instance: Dashboard

  static create(): Dashboard {
    if (!this._instance)
      this._instance = super.create(new WhiteHeader(), new WhiteBody())
    return this._instance
  }
}

export class BlackDashboard extends DefaultDashboard {

  private static _instance: Dashboard

  static create(): Dashboard {
    if (!this._instance)
      this._instance = super.create(new BlackHeader(), new BlackBody())
    return this._instance
  }
}
