export type IntSyncMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncMappingStateMachine {
  private allowedTransitions: Record<IntSyncMappingState, IntSyncMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncMappingState, to: IntSyncMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncMappingState, to: IntSyncMappingState): IntSyncMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncMapping: " + from + " -> " + to);
    }
    return to;
  }
}
