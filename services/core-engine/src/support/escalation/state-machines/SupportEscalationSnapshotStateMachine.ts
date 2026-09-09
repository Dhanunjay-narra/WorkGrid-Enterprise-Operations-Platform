export type SupportEscalationSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationSnapshotStateMachine {
  private allowedTransitions: Record<SupportEscalationSnapshotState, SupportEscalationSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationSnapshotState, to: SupportEscalationSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationSnapshotState, to: SupportEscalationSnapshotState): SupportEscalationSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
