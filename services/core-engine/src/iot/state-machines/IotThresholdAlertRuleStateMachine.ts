export type IotThresholdAlertRuleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotThresholdAlertRuleStateMachine {
  private validTransitions: Record<IotThresholdAlertRuleState, IotThresholdAlertRuleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotThresholdAlertRuleState, next: IotThresholdAlertRuleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotThresholdAlertRuleState, next: IotThresholdAlertRuleState): IotThresholdAlertRuleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotThresholdAlertRule: from " + current + " to " + next);
    }
    return next;
  }
}
