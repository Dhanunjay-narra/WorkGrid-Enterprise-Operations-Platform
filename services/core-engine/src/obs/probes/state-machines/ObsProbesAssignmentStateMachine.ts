export type ObsProbesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesAssignmentStateMachine {
  private allowedTransitions: Record<ObsProbesAssignmentState, ObsProbesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesAssignmentState, to: ObsProbesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesAssignmentState, to: ObsProbesAssignmentState): ObsProbesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
