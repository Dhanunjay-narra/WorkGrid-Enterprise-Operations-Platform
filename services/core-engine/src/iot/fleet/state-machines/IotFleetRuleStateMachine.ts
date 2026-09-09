export type IotFleetRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetRuleStateMachine {
  private allowedTransitions: Record<IotFleetRuleState, IotFleetRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetRuleState, to: IotFleetRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetRuleState, to: IotFleetRuleState): IotFleetRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetRule: " + from + " -> " + to);
    }
    return to;
  }
}
