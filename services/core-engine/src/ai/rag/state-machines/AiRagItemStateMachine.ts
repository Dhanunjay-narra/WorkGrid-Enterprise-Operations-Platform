export type AiRagItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagItemStateMachine {
  private allowedTransitions: Record<AiRagItemState, AiRagItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagItemState, to: AiRagItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagItemState, to: AiRagItemState): AiRagItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagItem: " + from + " -> " + to);
    }
    return to;
  }
}
