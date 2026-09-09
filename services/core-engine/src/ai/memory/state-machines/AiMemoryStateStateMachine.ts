export type AiMemoryStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryStateStateMachine {
  private allowedTransitions: Record<AiMemoryStateState, AiMemoryStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryStateState, to: AiMemoryStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryStateState, to: AiMemoryStateState): AiMemoryStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryState: " + from + " -> " + to);
    }
    return to;
  }
}
