export type SupSupportAgentState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupSupportAgentStateMachine {
  private validTransitions: Record<SupSupportAgentState, SupSupportAgentState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupSupportAgentState, next: SupSupportAgentState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupSupportAgentState, next: SupSupportAgentState): SupSupportAgentState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupSupportAgent: from " + current + " to " + next);
    }
    return next;
  }
}
