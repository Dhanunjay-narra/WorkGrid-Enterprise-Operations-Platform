export type IntSyncPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncPayloadStateMachine {
  private allowedTransitions: Record<IntSyncPayloadState, IntSyncPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncPayloadState, to: IntSyncPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncPayloadState, to: IntSyncPayloadState): IntSyncPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncPayload: " + from + " -> " + to);
    }
    return to;
  }
}
