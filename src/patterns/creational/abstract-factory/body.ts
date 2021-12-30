export interface Body {
  draw(): void
}

export class WhiteBody implements Body {

  draw(): void {
    console.log('White Body Drew!')
  }
}

export class BlackBody implements Body {

  draw(): void {
    console.log('Black Body Drew!')
  }
}
