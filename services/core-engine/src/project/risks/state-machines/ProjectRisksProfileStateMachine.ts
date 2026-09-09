export type ProjectRisksProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksProfileStateMachine {
  private allowedTransitions: Record<ProjectRisksProfileState, ProjectRisksProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksProfileState, to: ProjectRisksProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksProfileState, to: ProjectRisksProfileState): ProjectRisksProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksProfile: " + from + " -> " + to);
    }
    return to;
  }
}
