export type AiMemoryPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryPolicyStateMachine {
  private allowedTransitions: Record<AiMemoryPolicyState, AiMemoryPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryPolicyState, to: AiMemoryPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryPolicyState, to: AiMemoryPolicyState): AiMemoryPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
