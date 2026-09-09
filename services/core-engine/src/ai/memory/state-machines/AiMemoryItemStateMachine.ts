export type AiMemoryItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryItemStateMachine {
  private allowedTransitions: Record<AiMemoryItemState, AiMemoryItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryItemState, to: AiMemoryItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryItemState, to: AiMemoryItemState): AiMemoryItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryItem: " + from + " -> " + to);
    }
    return to;
  }
}
