export type BiExportsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsRuleStateMachine {
  private allowedTransitions: Record<BiExportsRuleState, BiExportsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsRuleState, to: BiExportsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsRuleState, to: BiExportsRuleState): BiExportsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsRule: " + from + " -> " + to);
    }
    return to;
  }
}
