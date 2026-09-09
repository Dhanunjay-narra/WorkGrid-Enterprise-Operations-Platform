export type AiMemoryEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryEventStateMachine {
  private allowedTransitions: Record<AiMemoryEventState, AiMemoryEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryEventState, to: AiMemoryEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryEventState, to: AiMemoryEventState): AiMemoryEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryEvent: " + from + " -> " + to);
    }
    return to;
  }
}
