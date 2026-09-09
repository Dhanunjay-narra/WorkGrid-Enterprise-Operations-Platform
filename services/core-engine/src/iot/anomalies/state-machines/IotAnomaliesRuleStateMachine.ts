export type IotAnomaliesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesRuleStateMachine {
  private allowedTransitions: Record<IotAnomaliesRuleState, IotAnomaliesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesRuleState, to: IotAnomaliesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesRuleState, to: IotAnomaliesRuleState): IotAnomaliesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesRule: " + from + " -> " + to);
    }
    return to;
  }
}
