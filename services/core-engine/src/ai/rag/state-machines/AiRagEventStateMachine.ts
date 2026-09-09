export type AiRagEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagEventStateMachine {
  private allowedTransitions: Record<AiRagEventState, AiRagEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagEventState, to: AiRagEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagEventState, to: AiRagEventState): AiRagEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagEvent: " + from + " -> " + to);
    }
    return to;
  }
}
