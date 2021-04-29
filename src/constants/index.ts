export const BANK = {
  1: '0x0000000000000000000000000000000000000000',
  5: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
}

export const DefaultProviderName = 'DEFAULT'

export const MERKLE_DISTRIBUTOR_ADDRESS = {
  1: '0x0000000000000000000000000000000000000000',
  //  5: '0x2abF2d32aCF29551eCa2097BE2E49e3249c6E08e'  // <- This goerli one has claims no-oped - claiming leaves it claimable
  5: '0xEaf539042bcFF43d8340eb5673A9ce726fFb498A', // <- This goerli one has claims enabled - claiming will make it unclaimable
}
export const MERKLE_DISTRIBUTOR_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'token_', type: 'address' },
      { internalType: 'bytes32', name: 'merkleRoot_', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'isClaimed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'index', type: 'uint256' },
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/18533a1dfcd146b8994f38b8e6af372c',
  42: 'https://kovan.infura.io/v3/18533a1dfcd146b8994f38b8e6af372c',
}

export const INFURA_ID = '94570b7a36aa45ffbb728931698d2d85'

export const MERKLE_PROOFS = {
  '1': {
    merkleRoot:
      '0x68de9ea8bc4f9376714cd180a888b051634a2e2d775af9e29d911fe191624eba',
    tokenTotal: '0x0100',
    claims: {
      '0xEC3281124d4c2FCA8A88e3076C1E7749CfEcb7F2': {
        index: 0,
        amount: '0x0100',
        proof: [],
      },
    },
  },
  '5': {
    merkleRoot:
      '0xb89da911b314b6ea76c86eda327272813e3e4b26a4ef1a2d1098a57749af73b5',
    tokenTotal: '0x27797f26d671c7',
    claims: {
      '0xEC3281124d4c2FCA8A88e3076C1E7749CfEcb7F2': {
        index: 0,
        amount: '0x27797F26D671C7',
        proof: [],
      },
    },
  },
}
