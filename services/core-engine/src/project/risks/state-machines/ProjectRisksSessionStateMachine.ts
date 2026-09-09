export type ProjectRisksSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksSessionStateMachine {
  private allowedTransitions: Record<ProjectRisksSessionState, ProjectRisksSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksSessionState, to: ProjectRisksSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksSessionState, to: ProjectRisksSessionState): ProjectRisksSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksSession: " + from + " -> " + to);
    }
    return to;
  }
}
