export type IntSyncThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncThresholdStateMachine {
  private allowedTransitions: Record<IntSyncThresholdState, IntSyncThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncThresholdState, to: IntSyncThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncThresholdState, to: IntSyncThresholdState): IntSyncThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
