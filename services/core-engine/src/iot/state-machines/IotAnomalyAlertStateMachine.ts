export type IotAnomalyAlertState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotAnomalyAlertStateMachine {
  private validTransitions: Record<IotAnomalyAlertState, IotAnomalyAlertState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotAnomalyAlertState, next: IotAnomalyAlertState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotAnomalyAlertState, next: IotAnomalyAlertState): IotAnomalyAlertState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotAnomalyAlert: from " + current + " to " + next);
    }
    return next;
  }
}
