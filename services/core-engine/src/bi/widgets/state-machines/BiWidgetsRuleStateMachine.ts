export type BiWidgetsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsRuleStateMachine {
  private allowedTransitions: Record<BiWidgetsRuleState, BiWidgetsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsRuleState, to: BiWidgetsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsRuleState, to: BiWidgetsRuleState): BiWidgetsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsRule: " + from + " -> " + to);
    }
    return to;
  }
}
