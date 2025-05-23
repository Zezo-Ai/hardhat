import {
  CallExecutionState,
  ContractAtExecutionState,
  DeploymentExecutionState,
  ExecutionStateType,
  ReadEventArgumentExecutionState,
  SendDataExecutionState,
  StaticCallExecutionState,
} from "./types/execution-state";

export type MapExStateTypeToExState<ExStateT extends ExecutionStateType> =
  ExStateT extends ExecutionStateType.DEPLOYMENT_EXECUTION_STATE
    ? DeploymentExecutionState
    : ExStateT extends ExecutionStateType.CALL_EXECUTION_STATE
    ? CallExecutionState
    : ExStateT extends ExecutionStateType.STATIC_CALL_EXECUTION_STATE
    ? StaticCallExecutionState
    : ExStateT extends ExecutionStateType.SEND_DATA_EXECUTION_STATE
    ? SendDataExecutionState
    : ExStateT extends ExecutionStateType.CONTRACT_AT_EXECUTION_STATE
    ? ContractAtExecutionState
    : ExStateT extends ExecutionStateType.READ_EVENT_ARGUMENT_EXECUTION_STATE
    ? ReadEventArgumentExecutionState
    : never;
