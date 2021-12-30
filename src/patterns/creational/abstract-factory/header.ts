export interface Header {
  draw(): void
}

export class WhiteHeader implements Header {

  draw(): void {
    console.log('White Header Drew!')
  }
}

export class BlackHeader implements Header {

  draw(): void {
    console.log('Black Header Drew!')
  }
}
