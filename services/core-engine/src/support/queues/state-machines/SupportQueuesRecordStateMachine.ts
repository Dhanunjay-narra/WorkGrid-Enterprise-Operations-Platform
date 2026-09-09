export type SupportQueuesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesRecordStateMachine {
  private allowedTransitions: Record<SupportQueuesRecordState, SupportQueuesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesRecordState, to: SupportQueuesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesRecordState, to: SupportQueuesRecordState): SupportQueuesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
