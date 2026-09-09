export type IntOauthMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthMappingStateMachine {
  private allowedTransitions: Record<IntOauthMappingState, IntOauthMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthMappingState, to: IntOauthMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthMappingState, to: IntOauthMappingState): IntOauthMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthMapping: " + from + " -> " + to);
    }
    return to;
  }
}
