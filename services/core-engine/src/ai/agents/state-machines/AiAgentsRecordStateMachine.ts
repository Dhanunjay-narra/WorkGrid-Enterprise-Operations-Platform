export type AiAgentsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsRecordStateMachine {
  private allowedTransitions: Record<AiAgentsRecordState, AiAgentsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsRecordState, to: AiAgentsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsRecordState, to: AiAgentsRecordState): AiAgentsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
