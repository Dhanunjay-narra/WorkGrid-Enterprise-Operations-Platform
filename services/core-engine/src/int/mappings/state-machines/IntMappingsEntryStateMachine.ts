export type IntMappingsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsEntryStateMachine {
  private allowedTransitions: Record<IntMappingsEntryState, IntMappingsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsEntryState, to: IntMappingsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsEntryState, to: IntMappingsEntryState): IntMappingsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
