import { Configs, Network } from '../types'
import arbitrum from './arbitrum'
import artio from './artio'
import avalanche from './avalanche'
import bartio from './bartio'
import base from './base'
import ethereum from './ethereum'
import fantom from './fantom'
import fraxtal from './fraxtal'
import gnosis from './gnosis'
import hekla from './hekla'
import mode from './mode'
import optimism from './optimism'
import polygon from './polygon'
import sepolia from './sepolia'
import taiko from './taiko'
import zkevm from './zkevm'

const config: Configs = {
  [Network.Arbitrum]: arbitrum,
  [Network.Avalanche]: avalanche,
  [Network.Base]: base,
  [Network.Gnosis]: gnosis,
  [Network.Ethereum]: ethereum,
  [Network.Optimism]: optimism,
  [Network.Polygon]: polygon,
  [Network.Sepolia]: sepolia,
  [Network.Zkevm]: zkevm,
  [Network.Fantom]: fantom,
  [Network.Fraxtal]: fraxtal,
  [Network.Mode]: mode,
  [Network.Artio]: artio,
  [Network.Bartio]: bartio,
  [Network.Hekla]: hekla,
  [Network.Taiko]: taiko,
}

export default config
