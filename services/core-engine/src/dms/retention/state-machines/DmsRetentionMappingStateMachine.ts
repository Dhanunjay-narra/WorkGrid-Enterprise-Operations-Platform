export type DmsRetentionMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionMappingStateMachine {
  private allowedTransitions: Record<DmsRetentionMappingState, DmsRetentionMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionMappingState, to: DmsRetentionMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionMappingState, to: DmsRetentionMappingState): DmsRetentionMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionMapping: " + from + " -> " + to);
    }
    return to;
  }
}
