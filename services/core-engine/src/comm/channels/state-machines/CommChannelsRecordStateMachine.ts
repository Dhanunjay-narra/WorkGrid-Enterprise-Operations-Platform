export type CommChannelsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsRecordStateMachine {
  private allowedTransitions: Record<CommChannelsRecordState, CommChannelsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsRecordState, to: CommChannelsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsRecordState, to: CommChannelsRecordState): CommChannelsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
