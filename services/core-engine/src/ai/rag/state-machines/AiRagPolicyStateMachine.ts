export type AiRagPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagPolicyStateMachine {
  private allowedTransitions: Record<AiRagPolicyState, AiRagPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagPolicyState, to: AiRagPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagPolicyState, to: AiRagPolicyState): AiRagPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
