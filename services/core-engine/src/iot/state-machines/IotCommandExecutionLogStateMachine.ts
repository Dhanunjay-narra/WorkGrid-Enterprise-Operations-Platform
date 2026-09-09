export type IotCommandExecutionLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotCommandExecutionLogStateMachine {
  private validTransitions: Record<IotCommandExecutionLogState, IotCommandExecutionLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotCommandExecutionLogState, next: IotCommandExecutionLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotCommandExecutionLogState, next: IotCommandExecutionLogState): IotCommandExecutionLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotCommandExecutionLog: from " + current + " to " + next);
    }
    return next;
  }
}
