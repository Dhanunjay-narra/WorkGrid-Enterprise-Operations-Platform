export type IntMappingsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsRecordStateMachine {
  private allowedTransitions: Record<IntMappingsRecordState, IntMappingsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsRecordState, to: IntMappingsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsRecordState, to: IntMappingsRecordState): IntMappingsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
