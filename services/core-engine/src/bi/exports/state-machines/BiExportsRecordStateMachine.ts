export type BiExportsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsRecordStateMachine {
  private allowedTransitions: Record<BiExportsRecordState, BiExportsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsRecordState, to: BiExportsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsRecordState, to: BiExportsRecordState): BiExportsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
