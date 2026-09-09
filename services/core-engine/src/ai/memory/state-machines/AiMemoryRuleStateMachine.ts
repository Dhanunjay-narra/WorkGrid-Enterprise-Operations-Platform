export type AiMemoryRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryRuleStateMachine {
  private allowedTransitions: Record<AiMemoryRuleState, AiMemoryRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryRuleState, to: AiMemoryRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryRuleState, to: AiMemoryRuleState): AiMemoryRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryRule: " + from + " -> " + to);
    }
    return to;
  }
}
