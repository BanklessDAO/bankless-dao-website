export const TOKEN_ADDRESS = {
  1: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  5: '0xab8b6fFA66E1f2CD8938f1df14104600367de257',
}

export const TOKEN_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
]

export const MERKLE_DISTRIBUTOR_ADDRESS = {
  1: [
    '0x9D1f1847582261bE41F5a54e8b60CAD21400C74f',
    '0xb9fce340e39e6fdfc641564922c1ef2716f70f04',
  ],
  5: [
    '0x2abF2d32aCF29551eCa2097BE2E49e3249c6E08e',
    '0xEaf539042bcFF43d8340eb5673A9ce726fFb498A',
  ],
}

export const MERKLE_DISTRIBUTOR_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'token_', type: 'address' },
      { internalType: 'bytes32', name: 'merkleRoot_', type: 'bytes32' },
      { internalType: 'address', name: 'treasury_', type: 'address' },
      { internalType: 'address', name: '_original', type: 'address' },
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
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { internalType: 'uint256', name: 'indexOriginal', type: 'uint256' },
      { internalType: 'uint256', name: 'amountOriginal', type: 'uint256' },
      {
        internalType: 'bytes32[]',
        name: 'merkleProofOriginal',
        type: 'bytes32[]',
      },
    ],
    name: 'claimBoth',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'original',
    outputs: [
      { internalType: 'contract MerkleDistributor', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reclaim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reclaimDate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
    inputs: [],
    name: 'treasury',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
]

export const DefaultProviderName = 'DEFAULT'

export const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/18533a1dfcd146b8994f38b8e6af372c',
  5: 'https://goerli.infura.io/v3/18533a1dfcd146b8994f38b8e6af372c',
}

export const INFURA_ID = '18533a1dfcd146b8994f38b8e6af372c'
