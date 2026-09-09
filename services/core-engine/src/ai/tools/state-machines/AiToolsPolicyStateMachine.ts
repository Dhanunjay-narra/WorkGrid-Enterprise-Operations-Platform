export type AiToolsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsPolicyStateMachine {
  private allowedTransitions: Record<AiToolsPolicyState, AiToolsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsPolicyState, to: AiToolsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsPolicyState, to: AiToolsPolicyState): AiToolsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
