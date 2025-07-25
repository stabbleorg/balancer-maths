export const reclammAbi = [
    {
        inputs: [
            {
                components: [
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'string', name: 'symbol', type: 'string' },
                    { internalType: 'string', name: 'version', type: 'string' },
                    {
                        internalType: 'uint256',
                        name: 'dailyPriceShiftExponent',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint64',
                        name: 'centerednessMargin',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialMinPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialMaxPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialTargetPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'tokenAPriceIncludesRate',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'tokenBPriceIncludesRate',
                        type: 'bool',
                    },
                ],
                internalType: 'struct ReClammPoolParams',
                name: 'params',
                type: 'tuple',
            },
            { internalType: 'contract IVault', name: 'vault', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { inputs: [], name: 'AmountOutGreaterThanBalance', type: 'error' },
    { inputs: [], name: 'BalanceRatioExceedsTolerance', type: 'error' },
    { inputs: [], name: 'BaseOutOfBounds', type: 'error' },
    { inputs: [], name: 'DailyPriceShiftExponentTooHigh', type: 'error' },
    { inputs: [], name: 'ECDSAInvalidSignature', type: 'error' },
    {
        inputs: [{ internalType: 'uint256', name: 'length', type: 'uint256' }],
        name: 'ECDSAInvalidSignatureLength',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'bytes32', name: 's', type: 'bytes32' }],
        name: 'ECDSAInvalidSignatureS',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'ERC2612ExpiredSignature',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'signer', type: 'address' },
            { internalType: 'address', name: 'owner', type: 'address' },
        ],
        name: 'ERC2612InvalidSigner',
        type: 'error',
    },
    { inputs: [], name: 'ExponentOutOfBounds', type: 'error' },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'currentNonce', type: 'uint256' },
        ],
        name: 'InvalidAccountNonce',
        type: 'error',
    },
    { inputs: [], name: 'InvalidCenterednessMargin', type: 'error' },
    { inputs: [], name: 'InvalidExponent', type: 'error' },
    { inputs: [], name: 'InvalidInitialPrice', type: 'error' },
    { inputs: [], name: 'InvalidShortString', type: 'error' },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'resolvedStartTime',
                type: 'uint256',
            },
            { internalType: 'uint256', name: 'endTime', type: 'uint256' },
        ],
        name: 'InvalidStartTime',
        type: 'error',
    },
    { inputs: [], name: 'InvalidStartTime', type: 'error' },
    { inputs: [], name: 'InvalidToken', type: 'error' },
    { inputs: [], name: 'NotImplemented', type: 'error' },
    { inputs: [], name: 'PoolNotInitialized', type: 'error' },
    { inputs: [], name: 'PoolOutsideTargetRange', type: 'error' },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'fourthRootPriceRatioDelta',
                type: 'uint256',
            },
        ],
        name: 'PriceRatioDeltaBelowMin',
        type: 'error',
    },
    { inputs: [], name: 'PriceRatioNotUpdating', type: 'error' },
    { inputs: [], name: 'PriceRatioUpdateDurationTooShort', type: 'error' },
    { inputs: [], name: 'PriceRatioUpdateTooFast', type: 'error' },
    { inputs: [], name: 'ProductOutOfBounds', type: 'error' },
    { inputs: [], name: 'ReClammPoolBptRateUnsupported', type: 'error' },
    {
        inputs: [
            { internalType: 'uint8', name: 'bits', type: 'uint8' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'SafeCastOverflowedUintDowncast',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
        name: 'SafeCastOverflowedUintToInt',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'SenderIsNotVault',
        type: 'error',
    },
    { inputs: [], name: 'SenderNotAllowed', type: 'error' },
    {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
    },
    { inputs: [], name: 'VaultIsNotLocked', type: 'error' },
    { inputs: [], name: 'VaultNotSet', type: 'error' },
    { inputs: [], name: 'WrongInitializationPrices', type: 'error' },
    { inputs: [], name: 'ZeroDivision', type: 'error' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'centerednessMargin',
                type: 'uint256',
            },
        ],
        name: 'CenterednessMarginUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'dailyPriceShiftExponent',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'dailyPriceShiftBase',
                type: 'uint256',
            },
        ],
        name: 'DailyPriceShiftExponentUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint32',
                name: 'lastTimestamp',
                type: 'uint32',
            },
        ],
        name: 'LastTimestampUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'startFourthRootPriceRatio',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'endFourthRootPriceRatio',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'priceRatioUpdateStartTime',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'priceRatioUpdateEndTime',
                type: 'uint256',
            },
        ],
        name: 'PriceRatioStateUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'virtualBalanceA',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'virtualBalanceB',
                type: 'uint256',
            },
        ],
        name: 'VirtualBalancesUpdated',
        type: 'event',
    },
    {
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
        ],
        name: 'computeBalance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentFourthRootPriceRatio',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentPoolCenteredness',
        outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'bool', name: '', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentPriceRange',
        outputs: [
            { internalType: 'uint256', name: 'minPrice', type: 'uint256' },
            { internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentPriceRatio',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentSpotPrice',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'computeCurrentVirtualBalances',
        outputs: [
            {
                internalType: 'uint256',
                name: 'currentVirtualBalanceA',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'currentVirtualBalanceB',
                type: 'uint256',
            },
            { internalType: 'bool', name: 'changed', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract IERC20',
                name: 'referenceToken',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'referenceAmountInRaw',
                type: 'uint256',
            },
        ],
        name: 'computeInitialBalancesRaw',
        outputs: [
            {
                internalType: 'uint256[]',
                name: 'initialBalancesRaw',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'balancesScaled18',
                type: 'uint256[]',
            },
            { internalType: 'enum Rounding', name: 'rounding', type: 'uint8' },
        ],
        name: 'computeInvariant',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'version', type: 'string' },
            { internalType: 'uint256', name: 'chainId', type: 'uint256' },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address',
            },
            { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
            {
                internalType: 'uint256[]',
                name: 'extensions',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'emitApproval',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'emitTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'selector', type: 'bytes4' }],
        name: 'getActionId',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAggregateFeePercentages',
        outputs: [
            {
                internalType: 'uint256',
                name: 'aggregateSwapFeePercentage',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'aggregateYieldFeePercentage',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCenterednessMargin',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentLiveBalances',
        outputs: [
            {
                internalType: 'uint256[]',
                name: 'balancesLiveScaled18',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getDailyPriceShiftBase',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getDailyPriceShiftExponent',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getHookFlags',
        outputs: [
            {
                components: [
                    {
                        internalType: 'bool',
                        name: 'enableHookAdjustedAmounts',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallBeforeInitialize',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallAfterInitialize',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallComputeDynamicSwapFee',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallBeforeSwap',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallAfterSwap',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallBeforeAddLiquidity',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallAfterAddLiquidity',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallBeforeRemoveLiquidity',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'shouldCallAfterRemoveLiquidity',
                        type: 'bool',
                    },
                ],
                internalType: 'struct HookFlags',
                name: 'hookFlags',
                type: 'tuple',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getLastTimestamp',
        outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getLastVirtualBalances',
        outputs: [
            {
                internalType: 'uint256',
                name: 'virtualBalanceA',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'virtualBalanceB',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMaximumInvariantRatio',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMaximumSwapFeePercentage',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMinimumInvariantRatio',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMinimumSwapFeePercentage',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getPriceRatioState',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint96',
                        name: 'startFourthRootPriceRatio',
                        type: 'uint96',
                    },
                    {
                        internalType: 'uint96',
                        name: 'endFourthRootPriceRatio',
                        type: 'uint96',
                    },
                    {
                        internalType: 'uint32',
                        name: 'priceRatioUpdateStartTime',
                        type: 'uint32',
                    },
                    {
                        internalType: 'uint32',
                        name: 'priceRatioUpdateEndTime',
                        type: 'uint32',
                    },
                ],
                internalType: 'struct PriceRatioState',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getRate',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getReClammPoolDynamicData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256[]',
                        name: 'balancesLiveScaled18',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'tokenRates',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'staticSwapFeePercentage',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalSupply',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'lastVirtualBalances',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'dailyPriceShiftExponent',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'dailyPriceShiftBase',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'centerednessMargin',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'currentPriceRatio',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'currentFourthRootPriceRatio',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'startFourthRootPriceRatio',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'endFourthRootPriceRatio',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint32',
                        name: 'priceRatioUpdateStartTime',
                        type: 'uint32',
                    },
                    {
                        internalType: 'uint32',
                        name: 'priceRatioUpdateEndTime',
                        type: 'uint32',
                    },
                    {
                        internalType: 'bool',
                        name: 'isPoolInitialized',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'isPoolPaused',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'isPoolInRecoveryMode',
                        type: 'bool',
                    },
                ],
                internalType: 'struct ReClammPoolDynamicData',
                name: 'data',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getReClammPoolImmutableData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'contract IERC20[]',
                        name: 'tokens',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'decimalScalingFactors',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'bool',
                        name: 'tokenAPriceIncludesRate',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'tokenBPriceIncludesRate',
                        type: 'bool',
                    },
                    {
                        internalType: 'uint256',
                        name: 'minSwapFeePercentage',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxSwapFeePercentage',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialMinPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialMaxPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialTargetPrice',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialDailyPriceShiftExponent',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'initialCenterednessMargin',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxDailyPriceShiftExponent',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxDailyPriceRatioUpdateRate',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'minPriceRatioUpdateDuration',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'minPriceRatioDelta',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'balanceRatioAndPriceTolerance',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct ReClammPoolImmutableData',
                name: 'data',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getStaticSwapFeePercentage',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getTokenInfo',
        outputs: [
            {
                internalType: 'contract IERC20[]',
                name: 'tokens',
                type: 'address[]',
            },
            {
                components: [
                    {
                        internalType: 'enum TokenType',
                        name: 'tokenType',
                        type: 'uint8',
                    },
                    {
                        internalType: 'contract IRateProvider',
                        name: 'rateProvider',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'paysYieldFees',
                        type: 'bool',
                    },
                ],
                internalType: 'struct TokenInfo[]',
                name: 'tokenInfo',
                type: 'tuple[]',
            },
            {
                internalType: 'uint256[]',
                name: 'balancesRaw',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'lastBalancesLiveScaled18',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getTokens',
        outputs: [
            {
                internalType: 'contract IERC20[]',
                name: 'tokens',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getVault',
        outputs: [
            { internalType: 'contract IVault', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isPoolWithinTargetRange',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isPoolWithinTargetRangeUsingCurrentVirtualBalances',
        outputs: [
            { internalType: 'bool', name: 'isWithinTargetRange', type: 'bool' },
            {
                internalType: 'bool',
                name: 'virtualBalancesChanged',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'nonces',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'enum AddLiquidityKind', name: '', type: 'uint8' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            {
                internalType: 'uint256[]',
                name: 'amountsInRaw',
                type: 'uint256[]',
            },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onAfterAddLiquidity',
        outputs: [
            { internalType: 'bool', name: '', type: 'bool' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onAfterInitialize',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
            {
                internalType: 'enum RemoveLiquidityKind',
                name: '',
                type: 'uint8',
            },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            {
                internalType: 'uint256[]',
                name: 'amountsOutRaw',
                type: 'uint256[]',
            },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onAfterRemoveLiquidity',
        outputs: [
            { internalType: 'bool', name: '', type: 'bool' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum SwapKind',
                        name: 'kind',
                        type: 'uint8',
                    },
                    {
                        internalType: 'contract IERC20',
                        name: 'tokenIn',
                        type: 'address',
                    },
                    {
                        internalType: 'contract IERC20',
                        name: 'tokenOut',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountInScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountOutScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'tokenInBalanceScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'tokenOutBalanceScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountCalculatedScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountCalculatedRaw',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'router',
                        type: 'address',
                    },
                    { internalType: 'address', name: 'pool', type: 'address' },
                    { internalType: 'bytes', name: 'userData', type: 'bytes' },
                ],
                internalType: 'struct AfterSwapParams',
                name: '',
                type: 'tuple',
            },
        ],
        name: 'onAfterSwap',
        outputs: [
            { internalType: 'bool', name: '', type: 'bool' },
            { internalType: 'uint256', name: '', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: 'pool', type: 'address' },
            { internalType: 'enum AddLiquidityKind', name: '', type: 'uint8' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            {
                internalType: 'uint256',
                name: 'minBptAmountOut',
                type: 'uint256',
            },
            {
                internalType: 'uint256[]',
                name: 'balancesScaled18',
                type: 'uint256[]',
            },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onBeforeAddLiquidity',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'balancesScaled18',
                type: 'uint256[]',
            },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onBeforeInitialize',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: 'pool', type: 'address' },
            {
                internalType: 'enum RemoveLiquidityKind',
                name: '',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: 'maxBptAmountIn',
                type: 'uint256',
            },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            {
                internalType: 'uint256[]',
                name: 'balancesScaled18',
                type: 'uint256[]',
            },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'onBeforeRemoveLiquidity',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum SwapKind',
                        name: 'kind',
                        type: 'uint8',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountGivenScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'balancesScaled18',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexIn',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexOut',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'router',
                        type: 'address',
                    },
                    { internalType: 'bytes', name: 'userData', type: 'bytes' },
                ],
                internalType: 'struct PoolSwapParams',
                name: '',
                type: 'tuple',
            },
            { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'onBeforeSwap',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum SwapKind',
                        name: 'kind',
                        type: 'uint8',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountGivenScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'balancesScaled18',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexIn',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexOut',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'router',
                        type: 'address',
                    },
                    { internalType: 'bytes', name: 'userData', type: 'bytes' },
                ],
                internalType: 'struct PoolSwapParams',
                name: '',
                type: 'tuple',
            },
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint256', name: '', type: 'uint256' },
        ],
        name: 'onComputeDynamicSwapFeePercentage',
        outputs: [
            { internalType: 'bool', name: '', type: 'bool' },
            { internalType: 'uint256', name: '', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
            {
                components: [
                    {
                        internalType: 'contract IERC20',
                        name: 'token',
                        type: 'address',
                    },
                    {
                        internalType: 'enum TokenType',
                        name: 'tokenType',
                        type: 'uint8',
                    },
                    {
                        internalType: 'contract IRateProvider',
                        name: 'rateProvider',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'paysYieldFees',
                        type: 'bool',
                    },
                ],
                internalType: 'struct TokenConfig[]',
                name: 'tokenConfig',
                type: 'tuple[]',
            },
            {
                components: [
                    {
                        internalType: 'bool',
                        name: 'disableUnbalancedLiquidity',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'enableAddLiquidityCustom',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'enableRemoveLiquidityCustom',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'enableDonation',
                        type: 'bool',
                    },
                ],
                internalType: 'struct LiquidityManagement',
                name: 'liquidityManagement',
                type: 'tuple',
            },
        ],
        name: 'onRegister',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum SwapKind',
                        name: 'kind',
                        type: 'uint8',
                    },
                    {
                        internalType: 'uint256',
                        name: 'amountGivenScaled18',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'balancesScaled18',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexIn',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'indexOut',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'router',
                        type: 'address',
                    },
                    { internalType: 'bytes', name: 'userData', type: 'bytes' },
                ],
                internalType: 'struct PoolSwapParams',
                name: 'request',
                type: 'tuple',
            },
        ],
        name: 'onSwap',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountCalculatedScaled18',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newCenterednessMargin',
                type: 'uint256',
            },
        ],
        name: 'setCenterednessMargin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newDailyPriceShiftExponent',
                type: 'uint256',
            },
        ],
        name: 'setDailyPriceShiftExponent',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'endPriceRatio', type: 'uint256' },
            {
                internalType: 'uint256',
                name: 'priceRatioUpdateStartTime',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'priceRatioUpdateEndTime',
                type: 'uint256',
            },
        ],
        name: 'startPriceRatioUpdate',
        outputs: [
            {
                internalType: 'uint256',
                name: 'actualPriceRatioUpdateStartTime',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stopPriceRatioUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'version',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
