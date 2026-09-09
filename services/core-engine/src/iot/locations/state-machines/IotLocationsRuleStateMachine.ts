export type IotLocationsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsRuleStateMachine {
  private allowedTransitions: Record<IotLocationsRuleState, IotLocationsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsRuleState, to: IotLocationsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsRuleState, to: IotLocationsRuleState): IotLocationsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsRule: " + from + " -> " + to);
    }
    return to;
  }
}
