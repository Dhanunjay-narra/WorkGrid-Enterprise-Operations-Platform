export type SupportCsatRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatRecordStateMachine {
  private allowedTransitions: Record<SupportCsatRecordState, SupportCsatRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatRecordState, to: SupportCsatRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatRecordState, to: SupportCsatRecordState): SupportCsatRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatRecord: " + from + " -> " + to);
    }
    return to;
  }
}
