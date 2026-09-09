export type IotHeartbeatRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotHeartbeatRecordStateMachine {
  private validTransitions: Record<IotHeartbeatRecordState, IotHeartbeatRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotHeartbeatRecordState, next: IotHeartbeatRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotHeartbeatRecordState, next: IotHeartbeatRecordState): IotHeartbeatRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotHeartbeatRecord: from " + current + " to " + next);
    }
    return next;
  }
}
