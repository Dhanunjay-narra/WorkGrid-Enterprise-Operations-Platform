export type BiWidgetsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsRecordStateMachine {
  private allowedTransitions: Record<BiWidgetsRecordState, BiWidgetsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsRecordState, to: BiWidgetsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsRecordState, to: BiWidgetsRecordState): BiWidgetsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
