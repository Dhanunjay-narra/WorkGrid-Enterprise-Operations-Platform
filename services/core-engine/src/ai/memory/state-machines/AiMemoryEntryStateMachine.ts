export type AiMemoryEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryEntryStateMachine {
  private allowedTransitions: Record<AiMemoryEntryState, AiMemoryEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryEntryState, to: AiMemoryEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryEntryState, to: AiMemoryEntryState): AiMemoryEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryEntry: " + from + " -> " + to);
    }
    return to;
  }
}
