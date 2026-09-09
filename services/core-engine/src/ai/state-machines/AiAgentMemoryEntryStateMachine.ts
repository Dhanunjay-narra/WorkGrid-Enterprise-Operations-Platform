export type AiAgentMemoryEntryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiAgentMemoryEntryStateMachine {
  private validTransitions: Record<AiAgentMemoryEntryState, AiAgentMemoryEntryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiAgentMemoryEntryState, next: AiAgentMemoryEntryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiAgentMemoryEntryState, next: AiAgentMemoryEntryState): AiAgentMemoryEntryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiAgentMemoryEntry: from " + current + " to " + next);
    }
    return next;
  }
}
